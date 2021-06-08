using EVO_WebAPI.Areas.Exceptions.Model;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using EVO_Models.Entities;

namespace EVO_WebAPI.Areas.Exceptions
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate RequestDelegate;
        //private readonly IExceptionLoggerService ExceptionLogger;
        private static readonly object lockObject = new object();


        public ExceptionMiddleware(RequestDelegate requestDelegate)
        {
            RequestDelegate = requestDelegate;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await RequestDelegate(httpContext);
            }
            catch (Exception ex)
            {
                var HeaderRequest = httpContext.Request.Headers;
                int UserId = 0;
                if (HeaderRequest.ContainsKey("UserId"))
                {
                    if (HeaderRequest.TryGetValue("UserId", out var traceValue))
                    {
                        UserId = Convert.ToInt32(traceValue);
                    }
                }
                lock (lockObject)
                {
                    ExceptionTracking ExceptionTracking = new ExceptionTracking((httpContext.Request.Method + httpContext.Request.Path), ex.Message, ex.Source, ex.StackTrace, ex.TargetSite.ToString(), UserId, DateTime.UtcNow);
                }
                await HandleExceptionAsync(httpContext, ex);

            }
        }

        private Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            return context.Response.WriteAsync(new ErrorDetails()
            {
                StatusCode = context.Response.StatusCode,
                Message = exception.Message
            }.ToString());
        }
    }
}

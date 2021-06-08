using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EVO_DAL.Models;
using EVO_DAL.Models.Exception;
using EVO_Infrastructure;
using EVO_WebAPI.Areas.Exceptions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace EVO_WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDataAccessServices(Configuration.GetConnectionString("DBConnectionString"));
            services.AddControllers();

            /*services.AddMvc().AddJsonOptions(options =>
            {
                //options.JsonSerializerOptions.
                options.JsonSerializerOptions.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter();
                options.JsonSerializerOptions.IgnoreNullValues = true;
            });*/
        }

        /*// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }*/

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app,
            IWebHostEnvironment env,
            EVODBContext DBContext,
            EVODBContextSingleton DBContextSingleton)
        {
            DBContextSingleton.Database.Migrate();
            DBContext.Database.Migrate();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.ConfigureCustomExceptionMiddleware();

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}

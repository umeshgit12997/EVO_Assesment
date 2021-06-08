using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Web;

namespace EVO_WebAPP.Respository
{
    public class EVOServiceRepository
    {
        public HttpClient Client { get; set; }

        public EVOServiceRepository()
        {
            Client = new HttpClient
            {
                BaseAddress = new Uri(ConfigurationManager.AppSettings["EVOAPIServiceUrl"].ToString())
            };
        }

        public HttpResponseMessage GetResponse(string url)
        {            
            return Client.GetAsync(url).Result;
        }

        public HttpResponseMessage PutResponse(string url, object model)
        {            
            return Client.PutAsJsonAsync(url, model).Result;
        }
        public HttpResponseMessage PostResponse(string url, object model)
        {            
            return Client.PostAsJsonAsync(url, model).Result;
        }
        public HttpResponseMessage DeleteResponse(string url)
        {            
            return Client.DeleteAsync(url).Result;
        }        
    }
}
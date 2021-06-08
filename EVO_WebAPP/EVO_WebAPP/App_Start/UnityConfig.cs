using EVO_WebAPP.Respository;
using EVO_WebAPP.Services;
using System.Web.Mvc;
using Unity;
using Unity.Mvc5;

namespace EVO_WebAPP
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();

            container.RegisterSingleton(typeof(EVOServiceRepository));
            container.RegisterSingleton(typeof(ContactService));            

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}
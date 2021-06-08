using EVO_BAL;
using EVO_BAL.Interfaces;
using EVO_DAL.Models;
using EVO_DAL.Models.Exception;
using EVO_DAL.Repository;
using EVO_DAL.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace EVO_Infrastructure
{
    public static class ServiceCollectionExtensions
    {
        public static void AddDataAccessServices(this IServiceCollection services, string connectionString)
        {
            services.AddEntityFrameworkNpgsql().AddDbContext<EVODBContext>(options =>
              options.UseNpgsql(connectionString));

            services.AddDbContext<EVODBContextSingleton>(options =>
            {
                options.UseNpgsql(connectionString);
            });

            var optionsBuilder = new DbContextOptionsBuilder<EVODBContextSingleton>();
            optionsBuilder.UseNpgsql(connectionString);
            services.AddSingleton(new EVODBContextSingleton(optionsBuilder.Options));

            services.AddScoped<IContactRepository, ContactRepository>();
            services.AddScoped<IContactService, ContactService>();
        }
    }
}

using EVO_DAL.Models;
using EVO_DAL.Models.Exception;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

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
        }
    }
}

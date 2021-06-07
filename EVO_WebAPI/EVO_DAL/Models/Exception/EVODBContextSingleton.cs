using EVO_Models.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EVO_DAL.Models.Exception
{
    public class EVODBContextSingleton : DbContext
    {
        public EVODBContextSingleton(DbContextOptions<EVODBContextSingleton> options)
      : base(options)
        {
        }

        public DbSet<ExceptionTracking> ExceptionTracking { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ExceptionTracking>(entity =>
            {
                entity.ToTable("exceptiontracking");

                entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired();

                entity.HasKey(e => e.Id);

                entity.Property(e => e.ExceptionMethod).HasColumnType("varchar(60)");
                entity.Property(e => e.ExceptionMessage).HasColumnType("text");
                entity.Property(e => e.ExceptionSource).HasColumnType("text");
                entity.Property(e => e.ExceptionStackTrace).HasColumnType("text");
                entity.Property(e => e.TargetSiteName).HasColumnType("text");
                entity.Property(e => e.CreatedBy).HasColumnType("int");
                entity.Property(e => e.CreatedOn).HasColumnType("timestamp");
            });
        }
    }
}

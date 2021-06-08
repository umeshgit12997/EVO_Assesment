using EVO_Models.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EVO_DAL.Models
{
    public class EVODBContext : DbContext
    {
        public EVODBContext(DbContextOptions<EVODBContext> options)
        : base(options)
        {
        }

        public virtual DbSet<Contact> Contact { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>(entity =>
            {
                entity.ToTable("contact");

                entity.Property(e => e.Id)
               .ValueGeneratedOnAdd()
               .IsRequired();

                entity.HasKey(e => e.Id);

                entity.Property(e => e.FirstName).HasColumnType("text");
                entity.Property(e => e.LastName).HasColumnType("text");
                entity.Property(e => e.Email).HasColumnType("text");
                entity.Property(e => e.PhoneNumber).HasColumnType("text");
                entity.Property(e => e.Status).HasColumnType("text");
            });
        }
    }
}

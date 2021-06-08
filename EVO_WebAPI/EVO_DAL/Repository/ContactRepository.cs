using EVO_DAL.Models;
using EVO_DAL.Repository.Interfaces;
using EVO_Models.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace EVO_DAL.Repository
{
    public class ContactRepository : IContactRepository
    {
        private readonly EVODBContext EVODBContext;

        public ContactRepository(EVODBContext EVODBContext)
        {
            this.EVODBContext = EVODBContext;
        }

        public int AddContact(Contact contact)
        {
            this.EVODBContext.Contact.Add(contact);
            return this.EVODBContext.SaveChanges();
        }
    }
}

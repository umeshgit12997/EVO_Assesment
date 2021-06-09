using EVO_DAL.Models;
using EVO_DAL.Repository.Interfaces;
using EVO_Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public int  DeleteContact(int id)
        {            
            var matchingContacts = this.EVODBContext.Contact.ToList().Where(item => item.Id.Equals(id));
            this.EVODBContext.Contact.RemoveRange(matchingContacts);

            return this.EVODBContext.SaveChanges();
        }

        public List<Contact> GetContacts()
        {
            return this.EVODBContext.Contact.ToList();
        }
    }
}

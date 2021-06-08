﻿using EVO_Models.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace EVO_DAL.Repository.Interfaces
{
    public interface IContactRepository
    {
        public int AddContact(Contact contact);

        public List<Contact> GetContacts();
    }
}

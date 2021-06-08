using EVO_Models.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace EVO_BAL.Interfaces
{
    public interface IContactService
    {
        public bool AddContact(DTOContact DTOContact);
    }
}

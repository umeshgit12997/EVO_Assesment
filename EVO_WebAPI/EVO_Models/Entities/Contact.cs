using EVO_Models.DTO;
using EVO_Models.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace EVO_Models.Entities
{
    public class Contact : DTOContact
    {
        /*public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public Status Status { get; set; }*/

        public Contact(string FirstName, string LastName, string Email, string PhoneNumber, string Status)
        {
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.Email = Email;
            this.PhoneNumber = PhoneNumber;
            this.Status = Status;
        }
    }
}

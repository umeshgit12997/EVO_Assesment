using EVO_Models.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace EVO_Models.Entities
{
    public class Contact
    {
       public string Id { get; set; }
       public string FirstName { get; set; }
       public string LastName { get; set; }
       public string Email { get; set; }
       public string PhoneNumber { get; set; }
       public Status Status { get; set; }
    }
}

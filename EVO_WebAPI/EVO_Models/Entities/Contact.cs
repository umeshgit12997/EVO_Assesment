using EVO_Models.DTO;

namespace EVO_Models.Entities
{
    public class Contact : DTOContact
    {        
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

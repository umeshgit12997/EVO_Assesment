using EVO_Models.DTO;

namespace EVO_Models.Entities
{
    public class Contact : DTOContact
    {        
        public Contact(int id, string firstName, string lastName, string Email, string PhoneNumber, string Status)
        {
            this.Id = id;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Email = Email;
            this.PhoneNumber = PhoneNumber;
            this.Status = Status;
        }
    }
}

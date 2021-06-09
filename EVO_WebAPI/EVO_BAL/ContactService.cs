using EVO_BAL.Interfaces;
using EVO_DAL.Repository.Interfaces;
using EVO_Models.DTO;
using EVO_Models.Entities;
using System.Collections.Generic;
using System.Linq;

namespace EVO_BAL
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository contactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            this.contactRepository = contactRepository;
        }
        public bool AddContact(DTOContact DTOContact)
        {
            Contact contact = new Contact(DTOContact.Id, DTOContact.FirstName, DTOContact.LastName, DTOContact.Email, DTOContact.PhoneNumber, DTOContact.Status);
           
            return (this.contactRepository.AddContact(contact) > 0);            
        }

        public bool DeleteContact(int id)
        {
            return (this.contactRepository.DeleteContact(id) > 0);
        }

        public List<DTOContact> GetContacts()
        {
            return this.contactRepository.GetContacts().Select(item => 
                    new DTOContact() { Id = item.Id, FirstName = item.FirstName, LastName = item.LastName, Email = item.Email, PhoneNumber = item.PhoneNumber, Status = item.Status})
                    .ToList();            
        }
    }
}

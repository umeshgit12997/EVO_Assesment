using EVO_WebAPP.Models;
using EVO_WebAPP.Respository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

namespace EVO_WebAPP.Services
{
    public class ContactService
    {
        readonly EVOServiceRepository evoService = EVOServiceRepository.GetInstance();      
        private static ContactService contactService;

        /*readonly EVOServiceRepository evoService;

        private ContactService(EVOServiceRepository evoService)
        {
            this.evoService = evoService;
        }*/

        public static ContactService GetInstance()
        {
            return contactService ?? (contactService = new ContactService());
        }
        
        public async Task<bool> AddContact(Contact contact)
        {
            HttpResponseMessage response = evoService.PostResponse("Contact", contact);            
            return await response.Content.ReadAsAsync<bool>();
        }

        public async Task<bool> DeleteContact(int id)
        {
            HttpResponseMessage response = evoService.DeleteResponse(string.Format("Contact/delete_contact/{0}", id));
            return await response.Content.ReadAsAsync<bool>();
        }

        public async Task<List<Contact>> GetContacts()
        {
            HttpResponseMessage response = evoService.GetResponse("Contact/contact_list");
            return await response.Content.ReadAsAsync<List<Contact>>();
        }
    }
}
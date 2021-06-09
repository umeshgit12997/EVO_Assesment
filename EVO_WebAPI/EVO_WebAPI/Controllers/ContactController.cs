using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EVO_BAL.Interfaces;
using EVO_Models.DTO;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EVO_WebAPI.Controllers
{
    [Route("api/Contact")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IContactService contactService;

        public ContactController(IContactService contactService)
        {
            this.contactService = contactService;
        }        

        // GET api/<ContactController>/5
        [HttpGet("contact_list")]
        public List<DTOContact> GetContacts()
        {
            return contactService.GetContacts();
        }

        // POST api/<ContactController>
        [HttpPost]
        public ActionResult<bool> AddContact([FromBody] DTOContact contact)
        {
            return contactService.AddContact(contact);
        }

        // PUT api/<ContactController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ContactController>/5
        [HttpDelete("delete_contact/{id}")]
        public ActionResult<bool> DeleteContact(int id)
        {
            return contactService.DeleteContact(id);
        }
    }
}

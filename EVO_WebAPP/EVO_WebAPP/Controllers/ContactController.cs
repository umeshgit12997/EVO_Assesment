using EVO_WebAPP.Models;
using EVO_WebAPP.Services;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace EVO_WebAPP.Controllers
{
    public class ContactController : Controller
    {
        ContactService contactService = ContactService.GetInstance();

        /*readonly ContactService contactService;        

        public ContactController(ContactService contactService)
        {
            this.contactService = contactService;
        }*/

        // GET: Contact
        public async Task<ActionResult> Index()
        {
            var contacts = await contactService.GetContacts();
            ContactList contactList = new ContactList() { contactList = contacts };
            return View(contactList);
        }

        // GET: Contact/Details/5
        public async Task<ActionResult> GetContacts()
        {
            var contacts = await contactService.GetContacts();
            ContactList contactList = new ContactList() { contactList = contacts };
            return View("Index", contactList);
        }        

        // POST: Contact/Create
        [HttpPost]
        public async Task<ActionResult> AddContact(Contact contact)
        {
            try
            {
                // TODO: Add insert logic here                
                await contactService.AddContact(contact);
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        /*
        // GET: Contact/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Contact/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Contact/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Contact/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }*/
    }
}

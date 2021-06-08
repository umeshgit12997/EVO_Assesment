using EVO_WebAPP.Models;
using EVO_WebAPP.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace EVO_WebAPP.Areas.ContactDetails.Controllers
{
    public class ContactController : Controller
    {
        ContactService contactService = new ContactService();

        // GET: ContactDetails/Contact
        public async Task<ActionResult> Index()
        {
            var contacts = await contactService.GetContacts();
            ContactList contactList = new ContactList() { contactList = contacts };
            return View(contactList);
        }

        // GET: ContactDetails/Contact/Details/5
        public async Task<ActionResult> GetContacts()
        {
            var contacts = await contactService.GetContacts();
            ContactList contactList = new ContactList() { contactList = contacts };
            return View("Index", contactList);
        }

        // GET: ContactDetails/Contact/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ContactDetails/Contact/Create
        [HttpPost]
        public async Task<ActionResult> AddContact(Contact contact)
        {
            try
            {
                // TODO: Add insert logic here

                
                await contactService.AddContact(contact);

                /*var contacts = await contactService.GetContacts();
                ContactList contactList = new ContactList() { contactList = contacts };
                return View(contactList);*/
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: ContactDetails/Contact/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ContactDetails/Contact/Edit/5
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

        // GET: ContactDetails/Contact/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ContactDetails/Contact/Delete/5
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
        }
    }
}

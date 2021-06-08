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
        // GET: ContactDetails/Contact
        public ActionResult Index()
        {
            return View();
        }

        // GET: ContactDetails/Contact/Details/5
        public ActionResult Details(int id)
        {
            return View();
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

                ContactService contactService = new ContactService();
                await contactService.AddContact(contact);
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

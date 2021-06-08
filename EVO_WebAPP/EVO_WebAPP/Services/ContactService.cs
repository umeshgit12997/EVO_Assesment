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
        EVOServiceRepository evoService = new EVOServiceRepository();

        public ContactService(/*EVOServiceRepository evoService*/)
        {
            //this.evoService = evoService;
        }

        //public async Task<List<ImportedFiles>> GetImportedEpisodicCareDBFilesList(int orgId)
        //{
        //    HttpResponseMessage response = rdsService.GetResponse("episodic_care/audit?orgId=" + orgId);
        //    HandleRCSClientException.GetHandleRCSClientException((int)response.StatusCode);
        //    return await response.Content.ReadAsAsync<List<ImportedFiles>>();
        //}

        //public List<EpisodicCarePatientDataDto> GetSelectedEpisodicCareDBFileDetails(string queryParam)
        //{
        //    HttpResponseMessage response = rdsService.GetResponse("episodic_care/" + queryParam);
        //    HandleRCSClientException.GetHandleRCSClientException((int)response.StatusCode);
        //    return response.Content.ReadAsAsync<List<EpisodicCarePatientDataDto>>().Result;
        //}

        public async Task<bool> AddContact(Contact contact)
        {
            HttpResponseMessage response = evoService.PostResponse("Contact", contact);            
            return await response.Content.ReadAsAsync<bool>();
        }

        public async Task<List<Contact>> GetContacts()
        {
            HttpResponseMessage response = evoService.GetResponse("Contact/contact_list");
            return await response.Content.ReadAsAsync<List<Contact>>();
        }
    }
}
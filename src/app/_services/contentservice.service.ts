import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class ContentserviceService {
  baseUrl=environment.BASE_URL
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'token':localStorage.getItem('currentUser') })
  };
  // localStorage.getItem('currentUser')

  getDashaoardData(){  
    return this.http.get(this.baseUrl + 'admin/dashboard');
  }
  aboutUsPost(body){  
    return this.http.post(this.baseUrl + 'admin/aboutus',body);
  }
  
  aboutUsGet(){
    return this.http.get(this.baseUrl + 'admin/getaboutdata');
  }

  termsUsePost(body){  
    return this.http.post(this.baseUrl + 'admin/termsuse',body);
  }

  getTerms(){
    return this.http.get(this.baseUrl+'admin/termsuseweb');
  }
privacyPolicyPost(body){  
    return this.http.post(this.baseUrl + 'admin/privacypolicy',body);
  }
  privacyPolicyGet(){  
    return this.http.get(this.baseUrl + 'admin/getprivacypolicy');
  }
  faqPost(body){  
    return this.http.post(this.baseUrl + 'admin/addfaq',body);
  }
  editFaq(body){  
    return this.http.post(this.baseUrl + 'admin/editfaq',body);
  }
  getFaq(){  
    return this.http.get(this.baseUrl + 'admin/getfaq');
  }
  deleteFaq(id){  
    return this.http.post(this.baseUrl + 'admin/delfaq',id);
  }
  categoryPost(body){  
    return this.http.post(this.baseUrl + 'admin/addcategory',body);
  }
  updateCategory(body){  
    return this.http.put(this.baseUrl + 'admin/updatecategory',body);
  }
  getCategory(){  
    return this.http.get(this.baseUrl + 'admin/getcategory');
  }
  deleteCategory(id){  
    return this.http.post(this.baseUrl + 'admin/deletecategory',id);
  }
  getUser(){  
    return this.http.post(this.baseUrl + 'admin/userlist','');
  }
  addItem(body){  
    return this.http.post(this.baseUrl + 'admin/additem',body);
  }
   updateItem(body){  
    return this.http.put(this.baseUrl + 'admin/updateitems',body);
  }
  getItems(){  
    return this.http.get(this.baseUrl + 'admin/getitems');
  }
  deleteItem(id){
    return this.http.post(this.baseUrl + 'admin/deleteitem',id)
  }

  // extra part api
  addExtra(body){  
    return this.http.post(this.baseUrl + 'admin/addextra',body);
  }
   updateExtra(body){  
    return this.http.post(this.baseUrl + 'admin/editextra',body);
  }
  getextra(type){  
    return this.http.post(this.baseUrl + 'admin/getextra',type);
  }
  deleteExtra(body){
    return this.http.post(this.baseUrl + 'admin/deleteextra',body)
  }
// region api
  addRegion(body){  
    return this.http.post(this.baseUrl + 'admin/addregions',body);
  }
  getregion(){  
    return this.http.get(this.baseUrl + 'admin/getregions');
  }
  deleteRegion(body){
    return this.http.post(this.baseUrl + 'admin/deleteregions',body)
  }
// career 
addCareer(body){  
  return this.http.post(this.baseUrl + 'admin/addcareer',body);
}
getCareer(){  
  return this.http.get(this.baseUrl + 'admin/getcareer');
}

// career type api
  addCareerType(body){  
    return this.http.post(this.baseUrl + 'admin/addcareertype',body);
  }
  getCareerType(){  
    return this.http.get(this.baseUrl + 'admin/getcareertype');
  }
  deleteCareerType(body){
    return this.http.post(this.baseUrl + 'admin/deletecareertype',body)
  }

// driver

getDriver(){  
  return this.http.get(this.baseUrl + 'admin/getdriver');
}
verifyDriver(id){  
  return this.http.post(this.baseUrl + 'admin/verifydriver',id);
}
deactivateDriver(id){  
  return this.http.post(this.baseUrl + 'admin/deactivatedriver',id);
} 

addbranchStatus(body){  
  return this.http.post(this.baseUrl + 'admin/addbranchstatus',body);
}
 updatebranchStatus(body){  
  return this.http.put(this.baseUrl + 'admin/editbranchstatus',body);
}
getbranchStatus(){  
  return this.http.get(this.baseUrl + 'admin/getbranchstatus');
}
deletebranchStatus(body){
  return this.http.post(this.baseUrl + 'admin/deletebranchstatus',body)
}
setPrimarybranchStatus(body){
  return this.http.post(this.baseUrl + 'admin/setPrimarybranchstatus',body)
}

addWhyChoose(body){  
  return this.http.post(this.baseUrl + 'admin/whychoosedietcater',body);
}
getWhyChoose(){  
  return this.http.get(this.baseUrl + 'admin/getwhychoosedietcater');
}
addAppImage(body){  
  return this.http.post(this.baseUrl + 'admin/uploadimage',body);
}
addBannerTitle(body){  
  return this.http.post(this.baseUrl + 'admin/bannertitle',body);
}
getbannerTitle(){  
  return this.http.get(this.baseUrl + 'admin/getbannertitle');
}
getappImage(data){  
  return this.http.post(this.baseUrl + 'admin/uploadimage',data);
}
deleteappImage(data){  
  return this.http.post(this.baseUrl + 'admin/uploadimage',data);
}

addSupport(body){  
  return this.http.post(this.baseUrl + 'admin/support',body);
}
getSupport(){  
  return this.http.get(this.baseUrl + 'admin/getsupport');
}
}

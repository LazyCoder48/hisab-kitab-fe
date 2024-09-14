import {Injectable}     from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({
              providedIn: 'root'
            })
export class CommonService {

  constructor(private messageService: MessageService) { }

  showToast(toastData: any) {
    this.messageService.add(toastData);
  }

}

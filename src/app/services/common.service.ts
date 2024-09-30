/*
 * Copyright (c) 2024.
 * ajite created common.service.ts
 * Project: hisab-kitab-fe | Module: hisab-kitab-fe
 */
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

import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit {

  modalRef?: BsModalRef;
  croppedImage: any;
  imageChangedEvent: any;
  aspectRatio: any;

  constructor(private modalService: BsModalService, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  fileChangeEvent(event: any){
    this.imageChangedEvent = event;
  }

  imageCropped(event: any){
    // this.croppedImage = event.base64;
    // let file = event.target.files[0];
    // let blob = new Blob([file], { type: file.type });
    // let url = window.URL.createObjectURL(event.blob);
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl!);
    console.log(this.croppedImage);
    
    
  }
  selectedRatio=4/3;


  @Input()
    set ratioChanged(ratio: number) {
        if (ratio) {
            this.aspectRatio = ratio;
            // this.resetCropperPosition();
        }
    }

  imageLoaded(image?: LoadedImage) {
    // show cropper
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}

}

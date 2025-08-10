import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Uwuwufu, UwuwufuItem } from 'src/app/models/uwuwufu.model';

@Component({
  selector: 'app-add-uwuwufu',
  templateUrl: './add-uwuwufu.component.html',
  styleUrls: ['./add-uwuwufu.component.scss']
})
export class AddUwuwufuComponent {
  uwuwufuForm: FormGroup;
  imagePreview: string | null = null;
  itemImagePreviews: (string | null)[] = [];

  constructor(private fb: FormBuilder) {
    this.uwuwufuForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      items: this.fb.array([])
    });
  }

  get items() {
    return this.uwuwufuForm.get('items') as FormArray;
  }

  addItem() {
    const itemForm = this.fb.group({
      title: ['', Validators.required],
      imgUrl: ['', Validators.required]
    });

    this.items.push(itemForm);
    this.itemImagePreviews.push(null);
  }

  removeItem(index: number) {
    this.items.removeAt(index);
    this.itemImagePreviews.splice(index, 1);
  }

  onMainImageSelected(event: Event, isMainImage: boolean = true) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (isMainImage) {
          this.imagePreview = reader.result as string;
          this.uwuwufuForm.patchValue({ imageUrl: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onItemImageSelected(event: Event, index: number) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.itemImagePreviews[index] = reader.result as string;
        this.items.at(index).patchValue({ imgUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.uwuwufuForm.valid) {
      const formValue = this.uwuwufuForm.value;
      const newUwuwufu: Uwuwufu = {
        Id: Date.now(), // temporary ID generation
        Name: formValue.name,
        Description: formValue.description,
        ImageUrl: formValue.imageUrl,
        Items: formValue.items.map((item: any, index: number) => ({
          Id: index + 1,
          Title: item.title,
          ImgUrl: item.imgUrl,
          Uwuwufu: Date.now() // reference to parent
        }))
      };

      console.log('New Uwuwufu:', newUwuwufu);
      // Here you would typically call a service to save the data
    }
  }
} 
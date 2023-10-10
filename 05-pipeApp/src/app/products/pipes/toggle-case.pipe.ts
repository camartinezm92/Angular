import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(text:string, value:boolean = true): string {

    return (value)
    ?text.toUpperCase()
    :text.toLowerCase();

  }
}

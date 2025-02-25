import { CanDeactivateFn } from '@angular/router';
import { PostsComponent } from '../pages/posts/posts.component';

export const warningsGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  
  const currentComponent = component as PostsComponent;
  if(currentComponent.form.invalid && currentComponent.form.dirty){
    return window.confirm("¿Deseas abandonar la página sin guardar los cambios?");
  }
  
  return true;
};

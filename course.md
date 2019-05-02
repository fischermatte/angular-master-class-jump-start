# NgRx State Management Uphill

## Change Detection

- Zone.js intercepted alle browser async operations
- ChangeDetection starts from root component
- onPush - change detection is only propagated to childs if the component itself was changed
- CahngeDetection works on reference -> bei observables wirds nicht getriggered, zonejs checkt die nicht (noch nicht)
  -> async pipe kümmert sich aber drum
  
## Redusers

- nicht state mutieren -> kopieren (spread operator)
- try to avoid nested objects in state wegen kopiererei
  -> or use immerjs for mutation, more efficent
- an action should be handled by one reducer

## Important

- dont use 2way data binding with ngrx

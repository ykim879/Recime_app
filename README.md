# recime app (frontend)

## Installation Guide
### PREREQUISITES
Download Node.js from https://nodejs.org/en. Install in order to proceed as our app uses Angular.\
### DEPENDENCIES
First, install Angular by following command:
```bash
! npm install -g @angular/cli
````
You can see the details on following link: https://angular.io/guide/setup-local

Secondly, install Ionic by following command:
```bash
! npm install -g @ionic/cli
```
If you have Ionic already, you have to unintall and intall it again.
```bash
! npm uninstall -g ionic
! npm install -g @ionic/cli
```
You can see the details on following link: https://ionicframework.com/docs
Additionally, download 	jQuery (https://jquery.com/download/) and verify that thE ng2-search-filter is
installed as well (https://www.npmjs.com/package/ng2-search-filter).
### DOWNLOAD*
>       Download Recime_app-main.zip\
### BUILD
>       No build necessary for this app.\
### INSTALLATION**
>       No installation necessary for this app.\
### RUNNING APPLICATION**
Launch a terminal window and navigate to the directory where the Recime_app-main folder is located. Enter the /recime folder and type follwoing command: 
```bash
! ionic serve
```
>       For the best viewing experience, after the localhost site for recime is brought up, right click and
>       “inspect element” and set the viewing mode to iPhone 6/7/8.
>
## Release Notes
> # v.1.0.0 (04/26/2020)
>  **Features**:
>   1. Users are able to edit their profile by selecting their cooking skill level, dietary restrictions, and 
>      kitchen appliances.
>   2. Users are able to update their pantry status by adding ingredients and deleting ingredients.
>   3. Users are able to get recipe recommendations based on their pantry ingredients and profile.
>   
>  **Defects**:
>   1. The algorithm for the recipe recommendation is not sophisticated enough to present the best
>       recipes to the users so some recipes may show up often.


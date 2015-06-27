# Elephant
Angular password manager

A simple password manager for the agencies or the freelancers

You can store the accounts for all your projects, ordered by client

The app have a very simple web service written in php with the implementation of the ORM [PhpActiveRecord](http://www.phpactiverecord.org/)

UI [Bootsrap components for Angular](https://angular-ui.github.io/bootstrap/)

<h2 align="center">[Try the demo](project.dinosatto.com/Elephant/)</h2>

## Install Instructions

* Download master
* Copy folder to your Apache root
* Set the write permission to the folder 'ws', required by the slqite db
* Open your browser to http://path/of/your/Elephant/dir/
* Enter the password 'pass' (you can change this in /ws/init.php)
* Now you can use the Elephant password manager!

> If you wanna reset the db just delete /ws/elephant.db and copy-paste /ws/elephant-Clean.db , then rename in elephant.db

## App help

### Clients
- **Create a Client**
Insert the client name in the first textbox, then click on '+' or press enter
- **Modify a Client**
Double click on the client name, type the new name, then press enter or leave the textbox
- **Delete a Client**
Click on the client button 'X', then confirm the deletion with a click on the alert box.
> All the client's project and account will be deleted

### Projects
- **Add a Client's Project**
If it is not already selected, click on the client name, then insert the project name in the second textbox, finally click on '+' or press enter
- **Modify a Client's Project**
Double click on the project name, type the new name, then press enter or leave the textbox
- **Delete a Client's Project**
Click on the client button 'X', then confirm the deletion with a click on the alert box
> All the client's account will be deleted

### Accounts
- **Add an Account for a Project**
If it is not already selected, click on the client name and the project, then insert the account name in the third textbox, finally click on '+'  or press enter
Once the account is it created appear in the tab under the textbox, select it for insert the detail, then click on Update
- **Modify an Account for a Project**
Select from the accounts tab the account, change the detail then click on Update
- **Delete an Account for a Project**
Select from the accounts tab the account, then click on Delete, then confirm the deletion with a click on the alert box.



<hr>
*Thanks to [Michele Brandolin](http://www.intuitolab.com/) for the concept & the design*
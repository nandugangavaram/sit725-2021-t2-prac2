# sit725-2021-t2-prac2

This is a project to demostrate use of express to create end-points for adding and retrieving contacts from the server. 

Use of Methods:
1.  **GET** - `/getCustomer`

    *Inputs: - **Mandatory***

        1. name 
---        
2.  **POST** - `/addContact`

    *Inputs: - **Mandatory***

        1. name 
        2. phone 
---
3.  **PUT** - `/updateContact`

    *Inputs: - **Mandatory*** 

        1. name 
        2. phone 
---

# Running the application

1.  You can manually download the project from Github **(OR)** If you have git bash installed use command **`git clone https://github.com/nandugangavaram/sit725-2021-t2-prac2`** in terminal to replicate the repository to your local system.

2. Open the folder where the repository is cloned in visual studio code and open terminal and type **`npm install`** to install all dependencies.

3. After completion of previous step, in terminal type **`node server.js`** to run the server on predefined-env port or 3000 (Default).

4. Navigate to the hoster server in your preferred browser, eg. **`http:localhost:3000`**. List of available end-points are displayed. 

5. Now, end-points defined in initial landing page **(OR)** one's mentioned above can be used to trigger end-points.

6. `Riskman` or any other similar software applications can be used to trigger end-points directly once the server has started successfully.

# Copyrights

This is a public project that means anyone can use this project for their own testing and work.

Copyright (c) 2021 Gangavaram Gouri Nandan Reddy

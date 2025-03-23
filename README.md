# 🍽️ Menu Management App

A modular Node.js API for managing food menus, similar to those used in restaurant or meal-prep applications. This backend system allows authenticated users to create, view, update, and delete menu items with proper authorization and role-based access — following a clean **Repository → Service → Controller** architecture pattern.



## 🚀 Features

- Add, update, delete, and fetch menus
- Authorization: Only the creator can update/delete their menu
- Error handling using middleware (`next(error)`)
- Modular structure with separation of concerns
- MongoDB for storage via Mongoose ODM

---

## ⚙️ Tech Stack

- **Node.js + Express**
- **MongoDB + Mongoose**
- **JWT** for authentication
- **Repository-Service-Controller Pattern**



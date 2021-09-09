// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import PetsLayout from 'src/layouts/PetsLayout'
import CatsLayout from 'src/layouts/CatsLayout'
import FlashcardsLayout from 'src/layouts/FlashcardsLayout'
import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from './layouts/BlogLayout/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PetsLayout}>
        <Route path="/pets/new" page={PetNewPetPage} name="newPet" />
        <Route path="/pets/{id:Int}/edit" page={PetEditPetPage} name="editPet" />
        <Route path="/pets/{id:Int}" page={PetPetPage} name="pet" />
        <Route path="/pets" page={PetPetsPage} name="pets" />
      </Set>
      <Set wrap={CatsLayout}>
        <Route path="/cats/new" page={CatNewCatPage} name="newCat" />
        <Route path="/cats/{id:Int}/edit" page={CatEditCatPage} name="editCat" />
        <Route path="/cats/{id:Int}" page={CatCatPage} name="cat" />
        <Route path="/cats" page={CatCatsPage} name="cats" />
      </Set>
      <Set wrap={FlashcardsLayout}>
        <Route path="/flashcards/new" page={FlashcardNewFlashcardPage} name="newFlashcard" />
        <Route path="/flashcards/{id:Int}/edit" page={FlashcardEditFlashcardPage} name="editFlashcard" />
        <Route path="/flashcards/{id:Int}" page={FlashcardFlashcardPage} name="flashcard" />
        <Route path="/flashcards" page={FlashcardFlashcardsPage} name="flashcards" />
      </Set>
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Set wrap={BlogLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

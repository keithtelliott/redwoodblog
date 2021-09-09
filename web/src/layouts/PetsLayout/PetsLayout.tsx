import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type PetLayoutProps = {
  children: React.ReactNode
}

const PetsLayout = ({ children }: PetLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.pets()}
            className="rw-link"
          >
            Pets
          </Link>
        </h1>
        <Link
          to={routes.newPet()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Pet
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default PetsLayout

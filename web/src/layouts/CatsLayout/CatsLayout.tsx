import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type CatLayoutProps = {
  children: React.ReactNode
}

const CatsLayout = ({ children }: CatLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.cats()}
            className="rw-link"
          >
            Cats
          </Link>
        </h1>
        <Link
          to={routes.newCat()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Cat
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default CatsLayout

import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t bg-gray-200 py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h2 className="text-xl font-bold">Job Hunt</h2>
        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
      </div>

      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.351C0 23.407.593 24 1.324 24H12.89v-9.294H9.692V10.5h3.198V8.086c0-3.168 1.938-4.895 4.772-4.895 1.357 0 2.522.1 2.86.146v3.32h-1.962c-1.538 0-1.836.73-1.836 1.8v2.357h3.673l-.479 4.206h-3.194V24h6.275C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z" />
          </svg>
        </a>

        <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.94 4.94 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.957 13.957 0 011.671 3.149 4.822 4.822 0 003.149 9.75 4.903 4.903 0 01.96 9.342v.062a4.93 4.93 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417A9.867 9.867 0 010 21.539a13.936 13.936 0 007.548 2.211c9.057 0 14.009-7.513 14.009-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
          </svg>
        </a>

        <a href="https://linkedin.com" className="hover:text-gray-400" aria-label="LinkedIn">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452H16.85v-5.569c0-1.326-.027-3.035-1.849-3.035-1.851 0-2.135 1.446-2.135 2.939v5.665H9.268V9.001h3.554v1.561h.05c.496-.938 1.708-1.927 3.514-1.927 3.752 0 4.444 2.47 4.444 5.675v6.142zM5.337 7.433a2.06 2.06 0 11.001-4.119 2.06 2.06 0 01-.001 4.119zm1.783 13.019H3.553V9H7.12v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.726v20.549C0 23.23.792 24 1.771 24h20.451C23.208 24 24 23.23 24 22.275V1.726C24 .77 23.208 0 22.225 0z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer

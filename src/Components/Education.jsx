import React from 'react'

export default function Education() {
    return (
        <div className='bg-black text-white h-screen px-10' id='edu1'>
            {/* Heading */}
            <div>
                <h1 className=' text-6xl underline decoration-white underline-offset-8 decoration-[1px] font-bold'>
                    Education →
                </h1>
            </div>
            {/* Card section */}
            <div className='mt-20'>
                {/* Card 1 */}
                <a
                    className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 w-[600px] mx-auto cursor-default"
                >
                    <span
                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div className="sm:flex sm:justify-between sm:gap-4">
                        <div>
                            <h3 className="text-lg font-bold text-white sm:text-xl">
                                M.com (Commerce)
                            </h3>

                            <p className="mt-1 text-xs font-medium text-white">Aringar Anna government college, Musiri</p>
                        </div>

                        <div className="hidden sm:block sm:shrink-0">
                            <img

                                alt="College Logo"
                                src="https://www.collegebatch.com/static/clg-logo/arignar-anna-government-arts-college-musiri-manapparai-11123.jpg"
                                className="size-16 rounded-lg object-cover shadow-sm"
                            />
                        </div>
                    </div>

                    <dl className="mt-6 flex gap-4 sm:gap-6">
                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-white">Start</dt>
                            <dd className="text-xs text-gray-400">2021</dd>
                        </div>

                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-white">Complete</dt>
                            <dd className="text-xs text-gray-400">2023</dd>
                        </div>
                    </dl>
                </a>
                {/* Card 2 */}
                <a
                    className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 w-[600px] mx-auto mt-10 cursor-default"
                >
                    <span
                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div className="sm:flex sm:justify-between sm:gap-4">
                        <div>
                            <h3 className="text-lg font-bold text-white sm:text-xl">
                                B.com (Computer applications)
                            </h3>

                            <p className="mt-1 text-xs font-medium text-white">Jairams Arts & Science College, Karur </p>
                        </div>

                        <div className="hidden sm:block sm:shrink-0">
                            <img
                                alt="College Logo"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA4CAMAAACMj4vYAAAAh1BMVEX///8AVgDF0sUAXgAAVAAAWwAAWQD7/Pvy9fLM2MwAUgAAYQAKYwD3+fcATwC7yrrm7OaTrJLU3dOovKe1xbSvwa6ZsZmKpokxcC94mXcjaiAASwB+nn1pkGhIfEfe5t1ciFs9djtRgVAARgAZZRYmaSUAQQByl3GGpoRMhEc8fDV8oHmju6Hj3qGtAAAE50lEQVRIiZVViZKjNhDVwSFx6UISeAABgxcnO///fWmBPae3knTVjEH0+fp1C6FnkgsRnn74gwiCkIz//pvU9uvvv8qHXotQIITLP2lKQohgug6mn9d5HCzXApTzQGz9UzsQcXiy87XbVZqZft+3zN+9i58G55FcR9y2g6Np36vZ764YWTzn7EelByaqyVy7dklxXbotwYvve5eaezlPAkzDQteXqzt7kGtVZitZhxle9PcQYFBPi7PNws+Dwy8il8atywrW37pSg9o2O1qY+4F5vZerskn0E5h+NWAazWa+pA9CMEyj2yMI3ks8fDfIddu0Q/LeoplOBQm3w0I35bKq/KtBcJ3ZG/2IJpKOpBS5E2vx4gZ8b9M9AVv7wmb+fLMO4RQ3KVZ1e2Kzr91okH7Pqm5RnlC6nW9S5ePmCLfjLyZODPJG9Uukzt0A2GbHITlJVxtO7lDJHvkzSzX1FLTDiQkBZk3eNGdZ0iE4zlmQNcolU0dS7NVOe6wmvoXoZPHdeJazH/wUSpnjK3HH8TRtl/gbGSJBQ8+kOzNyJL5aJQMfSI7y+uSrGoaMPQgCyYlypEe22gAnGPHwh5jS4E0fkcVluYACP9IGsI23RfQE/pRAGrwGCNiCyohUDB064cVjBiCCo76JQ0Use+VIGsjlBgagSjnzkIfMuqx9n6MWuV41Z48W3AKy+u2vv38zI2qUbYgriEDN0L6PkdStNyePLKY7NMjzcR+F0Ujj1EUO8lStnL23WqrFX+IbkJQWDGmhrHUKUJqzMoluzegmw9+5lNtiWSOT5nQcUuB14G0b8RWF3WiEaVznVXwQtkUX7oBKIimntUwPII+uYdqXVQKeKU2nj7mGcfPNXOr6BeMkwbjBlsURWX8luElwkYFlBbuAP7YT9C9M6zgj9pDYfSbPJxC0QByG5GMeYzETpYm+Q8DfSCsEBz7dsxa4ipUw/TCAUDqpSvrIUHNNNGdcnznUWVVF1N8NQmzBSCs6o6ey0CqNGIbHbjrWc56W1YnPd1nTqtwemdxzjNXooirT6ceaZh2uShxdyvajETqyijTeZem3JWow5SccXH8+j5ca87gEZ9ePy4CZLavK6QVUQ/vjWmFByC2tIK9iuZm2NcO1gLqqbBHky1L6EJgnn9CqXPr02m3b5LeqSrFD/JnyWTzEGXCyu+HNuWEQC07j9Dy5fu5CzpHtu627LivthmMApP6pye+AvV+gzNhHl/IHbp/t7IV9tWjrcB+vPB5F3FZ1/xZkjmSRiXqNxdmgNRExawbgaC5Bn0xJ4GUBnw++ysvr5mk6drTobJ2z+lOzwZV0W1KWaZ+mqnuhJ7q+Sct5SukI4zOb8EEA2GhdkVznsqIUfDb944O+ZNs+b2pQHcwcvsz7cPs9LmmC03S5uSGl8w4qn/thaLKN8zSqt3GZSooxrrLL0q3KrreJjuMW181Xsdem0WRf5pufvVJ+HPy470vW9Tx/aS7m2x13wHXgFmw/dd0ydmtWrsNJufZJ675JzdgTl2f25H+Jhd3NclnDfSdhj0BjiBTwSGC3tDoXeVwyAaYhwEOQLewBgt7gTlc4NO20vTl0FTe/90pSMoq+3bFb7IDkMPrB72QGQvG8J60l1gjbWuCE4gPz0lsriAxDEMK0cL8AWwQxAS4b5PgXIfyJkI9T8w/UV1wxJRhLEQAAAABJRU5ErkJggg=="
                                className="size-16 rounded-lg object-cover shadow-sm"
                            />
                        </div>
                    </div>

                    <dl className="mt-6 flex gap-4 sm:gap-6">
                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-white">Start</dt>
                            <dd className="text-xs text-gray-400">2018</dd>
                        </div>

                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-white">Complete</dt>
                            <dd className="text-xs text-gray-400">2021</dd>
                        </div>
                    </dl>
                </a>
            </div>

        </div>
    )
}

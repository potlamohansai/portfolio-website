import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>

        <div className="skills__box">

        {/*==========GROUP 1======*/}
            <div className="skills__group">

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Node.js</h3>
                        <span className='skills__level'>Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className='skills__level'>Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">C/C++</h3>
                        <span className='skills__level'>Advanced</span>
                    </div>
                </div>
            </div>

        {/*==========GROUP 2======*/}
            <div className="skills__group">

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Express.js</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">NPM</h3>
                        <span className='skills__level'>Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Blockchain</h3>
                        <span className='skills__level'>Basic</span>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Backend
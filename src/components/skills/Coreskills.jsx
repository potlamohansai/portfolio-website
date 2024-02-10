import React from "react"

const Coreskills = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Computer Science Fundamentals</h3>
    
            <div className="skills__box">
    
            {/*==========GROUP 1======*/}
                <div className="skills__group">
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Data Structures</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">System Design</h3>
                            <span className='skills__level'>Basic</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">DBMS</h3>
                            <span className='skills__level'>Basic</span>
                        </div>
                    </div>
                </div>
    
            {/*==========GROUP 2======*/}
                <div className="skills__group">
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Algorithms</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Operating Systems</h3>
                            <span className='skills__level'>Basic</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Computer Networks</h3>
                            <span className='skills__level'>Basic</span>
                        </div>
                    </div>
    
                </div>
            </div>
    
        </div>
      )
}

export default Coreskills;
import React from "react";

const Otherskills = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Other Skills</h3>
    
            <div className="skills__box">
    
            {/*==========GROUP 1======*/}
                <div className="skills__group">
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">VS Code</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Swagger API</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Jest</h3>
                            <span className='skills__level'>Basic</span>
                        </div>
                    </div>
                </div>
    
            {/*==========GROUP 2======*/}
                <div className="skills__group">
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">IntelliJ IDEA</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Parcel</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>
    
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Tailwind CSS</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>
    
                </div>
            </div>
    
        </div>
      )
}

export default Otherskills;
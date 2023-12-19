import React from 'react';
import "./Learn"

function Learn() {
    return (
        <>
            <div style={{
                backgroundImage: "url('https://assets-global.website-files.com/65159e844f8f08a72cefa2aa/65159e844f8f08a72cefa5ce_Work%20Bg.svg')",
                width: "100%",
                height: "800px",
                backgroundColor: "black",
                color: "white",
                display: "flex",
                justifyContent: "space-evenly",
                gap: "10px"
            }}>
                <div style={{ width: "50%" }}>
                    <h1 style={{ marginLeft: "139px", marginTop: "200px", fontSize: "xxx-large" }}> WHAT YOU WILL LEARN</h1>
                    <button style={{
                        marginLeft: "147px",
                        marginTop: "-1px",
                        width: "319px",
                        height: "80px",
                        fontSize: "28px",
                        borderRadius: "16px",
                        cursor: 'pointer',
                        transition: 'background-color 0.9s ease',
                        
                        backgroundImage: 'linear-gradient(to bottom, #eefff9 0%, #ffccc1 49%, #dcdbff 100%)'
                    }}>
                        Join Fellow Today
                    </button>
                </div>

                <hr style={{ backgroundImage: 'linear-gradient(to bottom, #eefff9 0%, #ffccc1 49%, #dcdbff 100%)', border: "1px solid grey" }} />

                <div style={{ width: "50%" }}>
                    <div style={{ display: "flex", color: "white"}}>
                        <div style={{ marginTop: "200px", fontSize: "100px",lineHeight:"100px",    backgroundClip: "text", fontWeight:"400px",color:"grey", marginLeft:"-4px"}}>
                            1
                        </div>

                        <div>
                            <h3 style={{ marginLeft: "139px", marginTop: "200px", fontSize: "20px" }}>Introduction to Product management</h3>
                            <p style={{ marginLeft: "139px", fontSize: "20px" }}>Learn how you can implement things in future</p>
                        </div>
                    </div>

                    <br />

                    <div style={{ display: "flex", color: "white" }}>
                        <div style={{fontSize: "75px", fontWeight: "400px", fontSize: "100px",lineHeight:"100px",backgroundClip: "text",color:"grey"}}>
                            2
                        </div>

                        <div>
                            <h3 style={{ marginLeft: "139px",fontSize: "20px" }}>Introduction to Product management</h3>
                            <p style={{ marginLeft: "139px", fontSize: "20px" }}>Learn how you can implement things in future</p>
                        </div>
                    </div>

                    <br />

                    <div style={{ display: "flex", color: "white" }}>
                        <div style={{fontSize: "75px", fontWeight: "400px", fontSize: "100px",lineHeight:"100px", backgroundClip: "text",color:"grey"}}>
                            3
                        </div>

                        <div>
                            <h3 style={{ marginLeft: "139px", fontSize: "20px" }}>Introduction to Product management</h3>
                            <p style={{ marginLeft: "139px", fontSize: "20px" }}>Learn how you can implement things in future</p>
                        </div>
                    </div>

                    <br />  

                    <div style={{ display: "flex", color: "white" }}>
                        <div style={{ fontSize: "75px", fontWeight: "400px", fontSize: "100px",lineHeight:"100px",backgroundClip: "text",color:"grey"}}>
                            4
                        </div>

                        <div>
                            <h3 style={{ marginLeft: "139px", fontSize: "20px" }}>Introduction to Product management</h3>
                            <p style={{ marginLeft: "139px", fontSize: "20px" }}>Learn how you can implement things in future</p>
                        </div>
                    </div>

                    <br />



                    {/* <h3 style={{ marginLeft: "139px", fontSize: "20px" }}> Strategic understanding of the company</h3>
                    <p style={{ marginLeft: "139px", fontSize: "20px" }}>Qualify for jobs at top product startups</p>
                    <br />

                    <h3 style={{ marginLeft: "139px", fontSize: "20px" }}>    Problem Discovery </h3>
                    <p style={{ marginLeft: "139px", fontSize: "20px" }}>Globally-competitive salary based on your skills.</p>
                    <br />

                    <h3 style={{ marginLeft: "139px", fontSize: "20px" }}>   Problem Framing </h3>
                    <p style={{ marginLeft: "139px", fontSize: "20px" }}>Get interviews on your calendar directly.</p>
                    <br /> */}
                </div>
            </div >
        </>
    )
}

export default Learn


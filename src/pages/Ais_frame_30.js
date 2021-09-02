import './Ais_frame_30.css'
import Course from './Course'

const Ais_frame_30 = () => {

    return (
        <div style={{ minWidth: '375px', maxWidth: '1920px', margin: 'auto' }}>
            {/*header*/}

            <div className="flex-container section1" style={{ backgroundImage: 'url(./pic/Group276.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>

                <div >
                    <img className="logo-fs" src="pic/Logo.png" alt="futureskill" />
                    <h1 className="poppins-medium section1-h1" >แพลตฟอร์มการเรียนรู้</h1>
                    <h1 className="poppins-medium section1-h1" >แห่งยุคดิจิตอล</h1>
                    <p className="poppins-regular section1-p" >
                        <img src="pic/Check.png" /> เรียนได้ไม่จำกัด ครอบคลุมหลายหมวดหมู่<br />
                        <img src="pic/Check.png" /> เน้นเฉพาะทักษะที่จำเป็นในปัจจุบันและในอนาคต<br />
                        <img src="pic/Check.png" /> มีใบ Certificate รับรองเมื่อเรียนจบ
                    </p>

                </div>

                <div >
                    <img className="women" src="pic/Group 269.png" />
                </div>

            </div>

            {/*จอคอม*/}
            <div className="section2">
                <img className="laptop" src="pic/Group 265.png" />
                <div className="section2-margin-">
                    <h1 className="poppins-semi-bold section2-margin-h1" >เรียนครบทุกทักษะแห่งอนาคต</h1>

                    <p className="poppins-regular section2-margin-p" >ทั้ง Creative Business และ Technology<br />ด้วยทักษะใหม่แกะแกล่อง ในราคาสุดคุ้มสำหรับคนที่อยากก้าวหน้า</p>

                    <div className="flex-container">
                        <div className="light-green-box">
                            <div className="light-green-box-item1" style={{ display: 'inline-block' }}>
                                <img src="pic/Vector.png" />
                            </div>
                            <div className="light-green-box-item2" style={{ display: 'inline-block' }}>
                                <p className="poppins-regular" >มีใบรับรองเมื่อเรียนจบ</p>
                                <p className="poppins-regular" >ได้ทำโปรเจกต์จริงในคอร์ส</p>
                            </div>
                        </div>
                        <div className="light-green-box">
                            <div className="light-green-box-item1" style={{ display: 'inline-block' }}>
                                <img src="pic/Vector2.png" />
                            </div>
                            <div className="light-green-box-item2" style={{ display: 'inline-block' }}>
                                <p className="poppins-regular" >แพลตฟอร์มเรียนออนไลน์</p>
                                <p className="poppins-regular" >ทุกคอร์สไม่จำกัด</p>
                            </div>
                        </div>
                    </div>
                    <button className="roboto-regular section2-button"><a href="#section4">ดูรายละเอียด</a></button>
                </div>
            </div>

            {/*futureskillเหมาะกับใคร*/}
            <div className="section3" style={{ backgroundImage: 'url(./pic/Group277.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h1 className="poppins-semi-bold" >Future<span className="poppins-regular">Skill</span><span className="poppins-bold" style={{ color: '#242424' }}> เหมาะกับใคร</span></h1>

                <div className="flex-container section3-div1-3" style={{ textAlign: 'start' }}>
                    <div className="img-box">
                        <img src="pic/1487mvfjv 1.png" />
                    </div>
                    <div >
                        <p className="poppins-semi-bold section3-p" >สำหรับคนที่</p>
                        <h1 className="poppins-semi-bold section3-h1" >ไม่ต้องมีพื้นฐาน</h1>
                        <p className="poppins-semi-bold section3-p" >เพราะคอร์สเราสอนตั้งแต่เริ่มต้นจนถึงใช้งานได้จริง</p>
                    </div>
                </div>

                <div className="flex-container section3-div1-3" style={{ textAlign: 'end' }}>
                    <div>
                        <p className="poppins-semi-bold section3-p" >สำหรับคนที่</p>
                        <h1 className="poppins-semi-bold section3-h1" style={{ lineHeight: '1.3' }}>อยากเปลี่ยน<br />สายอาชีพ</h1>

                        <p className="poppins-semi-bold section3-p" >เพราะโลกยุคใหม่มีการเปลี่ยนแปลงเร็ว<br />มีสายงานใหม่ๆเกิดขึ้นเยอะมาก</p>
                    </div>
                    <div className="img-box">
                        <img src="pic/Group 37.png" />
                    </div>
                </div>

                <div className="flex-container section3-div1-3" style={{ textAlign: 'start' }}>
                    <div className="img-box">
                        <img src="pic/jbxci 1.png" />
                    </div>
                    <div>
                        <h1 className="poppins-semi-bold section3-h1" style={{ lineHeight: '1.3' }}>ผู้ที่อยากก้าวหน้า<br />ชอบเรียนรู้สิ่งใหม่ๆ</h1>

                        <p className="poppins-semi-bold section3-p" >เพราะความรู้แบบเดิมไม่สามารถใช้งานได้ในโลกยุคปัจจุบัน</p>
                    </div>
                </div>

                <div className="flex-container section3-div4" style={{ textAlign: 'end' }}>
                    <div >
                        <p className="poppins-semi-bold section3-p" >ผู้ที่ชอบความคุ้มค่า</p>
                        <h1 className="poppins-semi-bold section3-h1" >ได้รับใบ Certificate</h1>
                        <p className="poppins-semi-bold section3-p" >เอาใบ Certificate ไปเสริมโปรไฟล์เพิ่มโอกาสในการทำงาน</p>
                    </div>
                    <div className="img-box" >
                        <img src="pic/xcmlscm 1.png" />
                    </div>
                </div>

            </div>

            {/*พิเศษเฉพาะลูกค้าAIS*/}
            <div className="section4" id="section4">
                <h1 className="poppins-semi-bold">พิเศษเฉพาะลูกค้า<img src="pic/image 2.png" alt="AIS" style={{ position: 'relative', zIndex: '-100' }} /></h1>
                <h2 className="prompt-semi-bold">ราคาสุดคุ้มกับ แพ็คเกจรายเดือน</h2>

                <div className="flex-container justify" style={{ overflow: 'auto' }} >
                    <div className="section4-item1-2" style={{ display: 'inline-block' }}>
                        <h1 className="poppins-semi-bold section4-item1-3-h1" style={{ color: '#6100CE' }}>เรียนทุกคอร์ส<br />เดือนละ 5 ชม.</h1>

                        <p className="poppins-regular section4-item1-2-p" style={{ color: '#242424' }}>เรียนได้ทุกคอร์สไม่จำกัด<br />เดือนละ 5 ชั่วโมง*</p>

                        <p className="poppins-regular section4-item1-2-p p-height" style={{ color: '#242424' }}>เหมาะกับผู้ที่เริ่มต้นเรียนออนไลน์</p>

                        <h1 className="prompt-semi-bold section4-item1-3-price" style={{ color: '#6100CE' }}>466 บาท / เดือน</h1>
                        <p className="poppins-regular section4-item1-2-vat" style={{ color: '#6100CE' }} >{'(ไม่รวม VAT)'}</p>

                        <button className="poppins-semi-bold section4-item1-3-button" style={{ color: '#FFFFFF', backgroundColor: '#3C3533' }}>สมัครเรียน</button>
                    </div>

                    <div className="section4-item1-2" style={{ display: 'inline-block' }}>
                        <h1 className="poppins-semi-bold section4-item1-3-h1" style={{ color: '#6100CE' }}>เรียนทุกคอร์ส<br />เดือนละ 12 ชม.</h1>

                        <p className="poppins-regular section4-item1-2-p" style={{ color: '#242424' }}>เรียนได้ทุกคอร์สไม่จำกัด<br />เดือนละ 12 ชั่วโมง*</p>

                        <p className="poppins-regular section4-item1-2-p" style={{ color: '#242424' }}>เหมาะกับผู้ที่อยากพัฒนา<br />ตัวเองสม่ำเสมอ</p>

                        <h1 className="prompt-semi-bold section4-item1-3-price" style={{ color: '#6100CE' }}>560 บาท / เดือน</h1>
                        <p className="poppins-regular section4-item1-2-vat" style={{ color: '#6100CE' }} >{'(ไม่รวม VAT)'}</p>

                        <button className="poppins-semi-bold section4-item1-3-button" style={{ display: 'inline-block', color: '#FFFFFF', backgroundColor: '#3C3533' }}>สมัครเรียน</button>
                    </div>
                    <div className="section4-item-3" style={{ display: 'inline-block', position: 'relative' }}>
                        <img src="pic/Group 272.png" style={{ position: 'absolute' }} />
                        <h1 className="poppins-semi-bold section4-item1-3-h1" style={{ color: '#FFFFFF' }}>เรียนทุกคอร์ส<br />ไม่จำกัด</h1>


                        <p className="poppins-regular section4-item1-2-p" style={{ color: '#FFFFFF' }}>เรียนได้ทุกคอร์สไม่จำกัด<br />ชั่วโมงแบบรายเดือน**</p>

                        <p className="poppins-regular section4-item1-2-p" style={{ color: '#FFFFFF' }}>ชอบความคุ้มค่า<br />เรียนได้แบบไม่มีขีดจำกัด</p>

                        <h1 className="prompt-semi-bold section4-item1-3-price" style={{ color: '#FFFFFF' }}>653 บาท / เดือน</h1>
                        <p className="poppins-regular section4-item1-2-vat" style={{ color: '#FFFFFF' }}>{'(ไม่รวม VAT)'}</p>

                        <button className="poppins-semi-bold section4-item1-3-button" style={{ color: '#7317DC', backgroundColor: '#FFFFFF' }}>สมัครเรียน</button>
                    </div>
                </div>
                <h3 className="poppins-semi-bold condition-h3" style={{ textAlign: 'left', color: '#242424' }}>เงื่อนไขการใช้งาน</h3>
                <ul className="poppins-regular condition-ul" style={{ textAlign: 'left', color: '#242424' }}>
                    <li>*หากซื้อแพ็กเกจรายเดือน <b>" เรียนทุกคอร์ส เดือนละ 5 ชั่วโมง หรือ 12 ชั่วโมง "</b> ทุกการเข้าดูครั้งแรกหรือดู rerun ระบบจะหักจำนวนชั่วโมงออกไป</li>
                    <li>**หากซื้อแพ็กเกจรายเดือน <b>" เรียนทุกคอร์สไม่จำกัด "</b> สามารถดูได้ทุกคอร์สเรียนแบบไม่จำกัดชั่วโมงตลอด 1 เดือน</li>
                </ul>                                    
            </div>

            {/*คอร์สเรียนยอดนิยม FutureSkill*/}
            <div className="section5" style={{textAlign:'center'}}>
                <h1 className="poppins-bold" style={{color:'#000000'}}>คอร์สเรียนยอดนิยม <span style={{color:'#242424'}}>Future</span><span className="poppins-regular" style={{color:'#242424'}}>Skill</span></h1>
                <Course />
            </div>
        </div>
    )
}

export default Ais_frame_30
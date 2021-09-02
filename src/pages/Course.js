import Slider from 'react-slick'

const Course = () => {
    const allCourse = [
        {
            imgSrc: 'pic/Rectangle 72.png',
            h1Pic: 'UpSkill Python Programming',
            h1Pic2: 'เส้นทางสู่  Developer',
            pPic: 'สอนแบบจับมือทำ เนื้อหาเข้าใจง่าย และฝึกทักษะ Work Shop Expert System',
            h1: 'สิ่งที่คุณจะได้ในคอร์สนี้',
            p1: 'คุณจะสามารถติดตั้งโปรแกรมภาษา Python',
            p2: 'เข้าใจโครงสร้างและเขียนโค้ดได้ด้วยตัวเองและสร้าง Project เบื้องต้นได้',
            p3: 'เรียนกับผู้รู้จริงในสายงาน',
        },
        {
            imgSrc: 'pic/Mask Group.png',
            h1Pic: 'Data Science for everyone',
            h1Pic2: '',
            pPic: 'ศาสตร์การวิเคราะห์ข้อมูลที่สามารถเข้าถึงได้ และไม่ยากอย่างที่คิด รวบรวม จัดการ วิเคราะห์ และเปลี่ยนแปลงข้อมูลจำนวนมาก',
            h1: 'สิ่งที่คุณจะได้ในคอร์สนี้',
            p1: 'Python for Data Science',
            p2: 'เครื่องมือที่ใช้ในการวิเคราะห์ข้อมูล (Data Analysis Tools)',
            p3: 'Data Visualization and Machine Learning',
        },
        {
            imgSrc: 'pic/Mask Group2.png',
            h1Pic: 'คอร์สเดียวจบครบเครื่องเรื่อง Digital Marketing',
            h1Pic2: '',
            pPic: 'รู้เทคนิคการติดอันดับเว็บไซต์บน Google ด้วย SEO และวัดผลการเข้าชมเว็บไซต์จากช่องทางต่างๆ',
            h1: 'สิ่งที่คุณจะได้ในคอร์สนี้',
            p1: 'ได้รู้จักภาพรวมทางด้านการตลาดออนไลน',
            p2: 'สามารถวัดผลเพื่อนำไปเพิ่มยอดขายและปรับประสิทธิภาพเครื่องมือได้',
            p3: 'รู้จักกับ Customer Journey',
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} style={{ display: 'inline-block', maxWidth: '90%' }} >
            {
                allCourse.map((item) => {
                    return (
                        <div> 
                            <div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div className="section5-div-item1" style={{ display: 'inline-block', background: '#751BE2', color: '#FFFFFF', textAlign: 'start', width: '45%', maxWidth: '718px' }}>
                                    
                                    <img src={item.imgSrc} />
                                    <div>
                                        <h1 className={`prompt-bold ${item.h1Pic2.length > 0 ? "line-clamp-title-1" : "line-clamp-title-2"}`} >{item.h1Pic}</h1>
                                        <h1 className={`poppins-regular`} >{item.h1Pic2}</h1>
                                        <p className="poppins-regular line-clamp" >{item.pPic}</p>
                                    </div>
                                    
                                </div>
                                <div className="section5-div-item2" style={{ display: 'inline-block', width: '45%', textAlign: 'start' }}>
                                    <h1 className="prompt-semi-bold" style={{ color: '#0D0D0D' }}>{item.h1}</h1>
                                    <div className="poppins-regular" style={{ color: '#393939', display: 'flex' }}><div><img src="pic/Check.png" /></div><p style={{ margin: '0' }}>{item.p1}</p></div>
                                    <div className="poppins-regular" style={{ color: '#393939', display: 'flex' }}><div><img src="pic/Check.png" /></div><p style={{ margin: '0' }}>{item.p2}</p></div>
                                    <div className="poppins-regular" style={{ color: '#393939', display: 'flex' }}><div><img src="pic/Check.png" /></div><p style={{ margin: '0' }}>{item.p3}</p></div>
                                    
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    )
}

export default Course
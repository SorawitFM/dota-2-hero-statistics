

const Dashboard = (props: any) => {
    const totalPick = [props.totalPick1, props.totalPick2, props.totalPick3, props.totalPick4,
    props.totalPick5, props.totalPick6, props.totalPick7, props.totalPick8]
    const thisHero = props.thisHero
    const mode = props.mode
    const scale = 200
    const winRate1 = thisHero['1_win'] * 100 / thisHero['1_pick']
    const winRate2 = thisHero['2_win'] * 100 / thisHero['2_pick']
    const winRate3 = thisHero['3_win'] * 100 / thisHero['3_pick']
    const winRate4 = thisHero['4_win'] * 100 / thisHero['4_pick']
    const winRate5 = thisHero['5_win'] * 100 / thisHero['5_pick']
    const winRate6 = thisHero['6_win'] * 100 / thisHero['6_pick']
    const winRate7 = thisHero['7_win'] * 100 / thisHero['7_pick']
    const winRate8 = thisHero['8_win'] * 100 / thisHero['8_pick']


    /*ให้ในการคำนวน CSS Scale ของ winrate เนื่องจากต้องการขยาย scale 
    เพื่อเปรียบเทียบให้เห็นความต่างของค่าในช่วง 50% ได้ดีขึ้น */
    function fixBellCurve(x: number) {
        if (x > 50) {
            return 100 - bellCurve(x)
        } else {
            return bellCurve(x)
        }
    }
    function bellCurve(x: number) {
        // ในที่นี้ใช้ฟังก์ชัน Gaussian (Normal Distribution)
        const mean = 50;  // ค่าเฉลี่ย (ค่า x ที่ y มีค่ามากที่สุด)
        const variance = 40;  // ความแปรปรวน
        const amplitude = 50;  // ความสูงของระฆัง

        return amplitude * Math.exp(-((x - mean) ** 2) / (2 * variance));
    }



    return (
        <div >
            {mode === 'pick' ? (
                <div className='p-3' style={{ color: 'white' }}>

                    <div className='d-flex justify-content-center align-items-center p-1 m-1'>
                        {'Pick Rate ( % )'}
                    </div>

                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='col-2' style={{ minWidth: '70px' }}>Herald</div>
                        <div className="col-10  progress" role="progressbar" aria-label="Basic example" >
                            <div className="progress-bar" style={{ width: `${Math.sqrt(thisHero['1_pick'] / totalPick[0]) * scale}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                {((thisHero['1_pick'] / totalPick[0]) * 100).toFixed(2)}
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center align-items-center '>
                        <div className='col-2' style={{ minWidth: '70px' }}>Guardian</div>
                        <div className="col-10 progress" role="progressbar" aria-label="Basic example" >
                            <div className="progress-bar" style={{ width: `${Math.sqrt(thisHero['2_pick'] / totalPick[1]) * scale}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                {((thisHero['2_pick'] / totalPick[1]) * 100).toFixed(2)}
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center align-items-center '>
                        <div className='col-2' style={{ minWidth: '70px' }}>Crusader</div>
                        <div className="col-10 progress" role="progressbar" aria-label="Basic example" >
                            <div className="progress-bar" style={{ width: `${Math.sqrt(thisHero['3_pick'] / totalPick[2]) * scale}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                {((thisHero['3_pick'] / totalPick[2]) * 100).toFixed(2)}
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center align-items-center '>
                        <div className='col-2' style={{ minWidth: '70px' }}>Archon</div>
                        <div className="col-10 progress" role="progressbar" aria-label="Basic example" >
                            <div className="progress-bar" style={{ width: `${Math.sqrt(thisHero['4_pick'] / totalPick[3]) * scale}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                {((thisHero['4_pick'] / totalPick[3]) * 100).toFixed(2)}
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center align-items-center '>
                        <div className='col-2' style={{ minWidth: '70px' }}>Legend</div>
                        <div className="col-10 progress" role="progressbar" aria-label="Basic example" >
                            <div className="progress-bar" style={{ width: `${Math.sqrt(thisHero['5_pick'] / totalPick[4]) * scale}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                {((thisHero['5_pick'] / totalPick[4]) * 100).toFixed(2)}
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center align-items-center '>
                        <div className='col-2' style={{ minWidth: '70px' }}>Ancient</div>
                        <div className="col-10 progress" role="progressbar" aria-label="Basic example" >
                            <div className="progress-bar" style={{ width: `${Math.sqrt(thisHero['6_pick'] / totalPick[5]) * scale}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                {((thisHero['6_pick'] / totalPick[5]) * 100).toFixed(2)}
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center align-items-center '>
                        <div className='col-2' style={{ minWidth: '70px' }}>Divine</div>
                        <div className="col-10 progress" role="progressbar" aria-label="Basic example" >
                            <div className="progress-bar" style={{ width: `${Math.sqrt(thisHero['7_pick'] / totalPick[6]) * scale}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                {((thisHero['7_pick'] / totalPick[6]) * 100).toFixed(2)}
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center align-items-center '>
                        <div className='col-2' style={{ minWidth: '70px' }}>Immortal</div>
                        <div className="col-10 progress" role="progressbar" aria-label="Basic example" >
                            <div className="progress-bar" style={{ width: `${Math.sqrt(thisHero['8_pick'] / totalPick[7]) * scale}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                {((thisHero['8_pick'] / totalPick[7]) * 100).toFixed(2)}
                            </div>
                        </div>
                    </div>



                </div >
            )
                :
                (
                    <div className='p-3 ' style={{ color: 'white' }}>

                        <div className='d-flex justify-content-center align-items-center p-1 m-1'>
                            {'Win Rate ( % )'}
                        </div>

                        <div className='d-flex justify-content-center align-items-center '>
                            <div className='col-2' style={{ minWidth: '70px' }}>Herald</div>
                            <div className="col-10 progress" role="progressbar" aria-label="Basic example" >
                                <div className="progress-bar" style={{ width: `${fixBellCurve(winRate1)}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                    {winRate1.toFixed(2)}
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='col-2' style={{ minWidth: '70px' }}>Guardian</div>
                            <div className="col-10 progress" role="progressbar" aria-label="Basic example" >
                                <div className="progress-bar" style={{ width: `${fixBellCurve(winRate2)}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                    {winRate2.toFixed(2)}
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='col-2' style={{ minWidth: '70px' }}>Crusader</div>
                            <div className="col-10 progress" role="progressbar" aria-label="Basic example" >
                                <div className="progress-bar" style={{ width: `${fixBellCurve(winRate3)}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                    {winRate3.toFixed(2)}
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='col-2' style={{ minWidth: '70px' }}>Archon</div>
                            <div className="col-10 progress" role="progressbar" aria-label="Basic example" >
                                <div className="progress-bar" style={{ width: `${fixBellCurve(winRate4)}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                    {winRate4.toFixed(2)}
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='col-2' style={{ minWidth: '70px' }}>Legend</div>
                            <div className="col-10 progress" role="progressbar" aria-label="Basic example" >
                                <div className="progress-bar" style={{ width: `${fixBellCurve(winRate5)}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                    {winRate5.toFixed(2)}
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='col-2' style={{ minWidth: '70px' }}>Ancient</div>
                            <div className="col-10 progress" role="progressbar" aria-label="Basic example" >
                                <div className="progress-bar" style={{ width: `${fixBellCurve(winRate6)}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                    {winRate6.toFixed(2)}
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='col-2' style={{ minWidth: '70px' }}>Divine</div>
                            <div className="col-10 progress" role="progressbar" aria-label="Basic example" >
                                <div className="progress-bar" style={{ width: `${fixBellCurve(winRate7)}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                    {winRate7.toFixed(2)}
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='col-2' style={{ minWidth: '70px' }}>Immortal</div>
                            <div className="col-10 progress" role="progressbar" aria-label="Basic example" >
                                <div className="progress-bar" style={{ width: `${fixBellCurve(winRate8)}%`, backgroundColor: 'rgba(250, 0, 0, 1)' }}>
                                    {winRate8.toFixed(2)}
                                </div>
                            </div>
                        </div>





                    </div >
                )
            }
        </div>

    )
}

export default Dashboard
import './Info.css';

function Info() {
  return (
    <div className="info-container">
      <div style={{paddingTop: '10px'}}>
        I am forever grateful for everyone I have worked with, thank you so much.
      </div>
      
      <div style={{marginTop: '20px'}}>
      Special thanks:
      <ul className="special-thanks">
        <li>
          Lourens, your love for development radiates. <br/>
          It touched my soul in main ways I can't describe. <br/>
          Thanks for giving me the love for updates.
        </li>
        <li>
          Menno, for being a dog and scaring me into making beautiful things. 
        </li>
        <li>
          Harry, for having a beautiful passion for doing the right thing. 
        </li>
        <li>
          Isabelle, for getting lost in conversations with me. 
        </li>
      </ul>
      </div>
      
      <div style={{marginTop: '30px'}}>
        And above all, thanks mom for the love, support, dedication, and drive to give us whatever we needed. 
      </div>
      
      <div style={{marginTop: '30px'}}>
        You have made me to what I am.
      </div>
    </div>
  );
}

export default Info;

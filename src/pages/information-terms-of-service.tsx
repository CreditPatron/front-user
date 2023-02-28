import SectionTitle from "components/section-title";
import Widget from "components/widget";

const Index: React.FC = () => (
    <>
      <SectionTitle title="" subtitle="Terms of service" />
      <Widget
          title="Terms of service"
          description={
            <span>
          Owned and created by{" "}
              <a
                  className="text-blue-500"
                  href="https://evigalfa.pl/"
                  target="_blank"
                  rel="noopener noreferrer">
            Evig Alpha
          </a>
        </span>
          }>
        <div className="text-gray-900 prose prose-sm max-w-none dark:text-white">
          <h6 className="font-bold">1. Terms</h6>
          <p>
          Welcome to our crowdfunding platform. By accessing this website, you agree to be bound by these terms of service, as well as all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
          <h6 className="font-bold">2. Use License</h6>
          <ol type="a">
            <li>
            Our platform grants you a non-exclusive, non-transferable license to use the platform for personal, non-commercial purposes:
              <ol type="i">
                <li>
                You may not modify, copy, distribute, or sell any of the materials on the platform for any commercial purpose or use them for any public display without our express written permission.
                </li>
                
              </ol>
            </li>
            <li>
            You may not attempt to decompile or reverse engineer any software contained on the website or remove any copyright or other proprietary notations from the materials.
            </li>
          </ol>
          <h6 className="font-bold">3. Disclaimer</h6>
          <ol type="a">
            <li>
            The materials on this website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. 
            </li>
            <li>
            We do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on our platform or otherwise relating to such materials or on any sites linked to this site.
            </li>
          </ol>
          <h6 className="font-bold">4. Limitations</h6>
          <p>
          In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our platform, even if we or a representative authorized by us have been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
          </p>
          <h6 className="font-bold">5. Accuracy of materials</h6>
          <p>
          The materials appearing on our platform may include technical, typographical, or photographic errors. We do not warrant that any of the materials on our platform are accurate, complete, or current. We may make changes to the materials contained on our platform at any time without notice. However, we do not make any commitment to update the materials.
          </p>
          <h6 className="font-bold">6. Links</h6>
          <p>
          Our platform may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such websites or services.
          </p>
          <h6 className="font-bold">7. Modifications</h6>
          <p>
          We may revise these terms of service for our platform at any time without notice. By using our platform, you are agreeing to be bound by the then-current version of these terms of service.
          </p>
          <h6 className="font-bold">8. Governing Law</h6>
          <p>
          These terms and conditions are governed by and construed in accordance with the laws of the state of Poland. 
          You irrevocably submit to the exclusive jurisdiction of the courts in that state or location for the resolution of any disputes related to these terms of service or your use of our platform. 
          Any dispute arising out of or related to these terms of service or your use of our platform shall be resolved through binding arbitration in accordance with the law, 
          and judgment on the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.
          </p>
          <p>
          By using our platform, you acknowledge that you have read and understood these terms of service and agree to be bound by them.
          </p>
        </div>       
      </Widget>
    </>
);
export default Index;

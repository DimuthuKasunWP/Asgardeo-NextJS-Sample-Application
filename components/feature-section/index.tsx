import { tw } from 'twind';
import Check from '@/../constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Features</h4>
          <p className={tw(`mt-2 text-5xl lg:text-5xl font-bold tracking-tight text-gray-900`)}>
          ABOUT ASGARDEO
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Best Investment</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Asgardeo’s developer-centric approach to IAM and CIAM helps increase developer productivity and accelerate time to market, resulting in a higher, faster return on investment.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Enterprise-ready</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
            Focus valuable team resources on delivering superior customer experiences, since the IDaaS reduces the time required to manage infrastructure and deployments.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Integrations</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Protect sensitive APIs and integrations in the cloud.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Confidence</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Quickly deliver safe, secure, and robust cloud-native digital applications that give customers confidence their data will be protected.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Security</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Streamline security reviews and approvals by codifying policies and standards, freeing developers to concentrate on building out their core applications.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Customer Experience</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Simplify customers’ experiences by letting them use the same log-in credentials no matter what part of the system they are connected to.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;

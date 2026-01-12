export function PrivacyPolicy() {
  return (
    <section id="privacy" className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl">Privacy Policy</h2>
            <p className="text-gray-300 text-lg">
              Your privacy is important to us. This policy outlines how SilverStock handles your information.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl text-white">Information We Collect</h3>
              <p className="text-gray-300">
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, or contact us for support. This may include your name, email address, 
                phone number, and trading preferences.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-white">How We Use Your Information</h3>
              <p className="text-gray-300">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send you technical notices and support messages, and communicate 
                with you about products and services.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-white">Information Sharing</h3>
              <p className="text-gray-300">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-white">Data Security</h3>
              <p className="text-gray-300">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-white">Contact Us</h3>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:kaimo.rim@mail.ee" className="text-white hover:text-gray-300 underline">
                  kaimo.rim@mail.ee
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
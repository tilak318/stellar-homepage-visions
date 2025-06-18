import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';

const countries = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "IT", name: "Italy" },
  { code: "ES", name: "Spain" },
  { code: "NL", name: "Netherlands" },
  { code: "BE", name: "Belgium" },
  { code: "CH", name: "Switzerland" },
  { code: "AT", name: "Austria" },
  { code: "SE", name: "Sweden" },
  { code: "NO", name: "Norway" },
  { code: "DK", name: "Denmark" },
  { code: "FI", name: "Finland" },
  { code: "IE", name: "Ireland" },
  { code: "NZ", name: "New Zealand" },
  { code: "JP", name: "Japan" },
  { code: "KR", name: "South Korea" },
  { code: "SG", name: "Singapore" },
  { code: "HK", name: "Hong Kong" },
  { code: "IN", name: "India" },
  { code: "BR", name: "Brazil" },
  { code: "MX", name: "Mexico" },
  { code: "AR", name: "Argentina" },
  { code: "CL", name: "Chile" },
  { code: "CO", name: "Colombia" },
  { code: "PE", name: "Peru" },
  { code: "ZA", name: "South Africa" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "IL", name: "Israel" },
  { code: "TR", name: "Turkey" },
  { code: "PL", name: "Poland" },
  { code: "CZ", name: "Czech Republic" },
  { code: "HU", name: "Hungary" },
  { code: "RO", name: "Romania" },
  { code: "BG", name: "Bulgaria" },
  { code: "HR", name: "Croatia" },
  { code: "SI", name: "Slovenia" },
  { code: "SK", name: "Slovakia" },
  { code: "LT", name: "Lithuania" },
  { code: "LV", name: "Latvia" },
  { code: "EE", name: "Estonia" },
  { code: "RU", name: "Russia" },
  { code: "UA", name: "Ukraine" },
  { code: "BY", name: "Belarus" },
  { code: "MD", name: "Moldova" },
  { code: "GE", name: "Georgia" },
  { code: "AM", name: "Armenia" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "UZ", name: "Uzbekistan" },
  { code: "KG", name: "Kyrgyzstan" },
  { code: "TJ", name: "Tajikistan" },
  { code: "TM", name: "Turkmenistan" },
  { code: "MN", name: "Mongolia" },
  { code: "CN", name: "China" },
  { code: "TW", name: "Taiwan" },
  { code: "TH", name: "Thailand" },
  { code: "VN", name: "Vietnam" },
  { code: "MY", name: "Malaysia" },
  { code: "ID", name: "Indonesia" },
  { code: "PH", name: "Philippines" },
  { code: "PK", name: "Pakistan" },
  { code: "BD", name: "Bangladesh" },
  { code: "LK", name: "Sri Lanka" },
  { code: "NP", name: "Nepal" },
  { code: "MM", name: "Myanmar" },
  { code: "KH", name: "Cambodia" },
  { code: "LA", name: "Laos" },
  { code: "BN", name: "Brunei" },
  { code: "FJ", name: "Fiji" },
  { code: "PG", name: "Papua New Guinea" },
  { code: "NC", name: "New Caledonia" },
  { code: "VU", name: "Vanuatu" },
  { code: "SB", name: "Solomon Islands" },
  { code: "TO", name: "Tonga" },
  { code: "WS", name: "Samoa" },
  { code: "KI", name: "Kiribati" },
  { code: "TV", name: "Tuvalu" },
  { code: "NR", name: "Nauru" },
  { code: "PW", name: "Palau" },
  { code: "MH", name: "Marshall Islands" },
  { code: "FM", name: "Micronesia" },
  { code: "CK", name: "Cook Islands" },
  { code: "NU", name: "Niue" },
  { code: "TK", name: "Tokelau" },
  { code: "AS", name: "American Samoa" },
  { code: "GU", name: "Guam" },
  { code: "MP", name: "Northern Mariana Islands" },
  { code: "PR", name: "Puerto Rico" },
  { code: "VI", name: "U.S. Virgin Islands" },
  { code: "AI", name: "Anguilla" },
  { code: "AG", name: "Antigua and Barbuda" },
  { code: "AW", name: "Aruba" },
  { code: "BS", name: "Bahamas" },
  { code: "BB", name: "Barbados" },
  { code: "BZ", name: "Belize" },
  { code: "BM", name: "Bermuda" },
  { code: "BO", name: "Bolivia" },
  { code: "VG", name: "British Virgin Islands" },
  { code: "KY", name: "Cayman Islands" },
  { code: "CR", name: "Costa Rica" },
  { code: "CU", name: "Cuba" },
  { code: "DM", name: "Dominica" },
  { code: "DO", name: "Dominican Republic" },
  { code: "EC", name: "Ecuador" },
  { code: "SV", name: "El Salvador" },
  { code: "GD", name: "Grenada" },
  { code: "GT", name: "Guatemala" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Haiti" },
  { code: "HN", name: "Honduras" },
  { code: "JM", name: "Jamaica" },
  { code: "NI", name: "Nicaragua" },
  { code: "PA", name: "Panama" },
  { code: "PY", name: "Paraguay" },
  { code: "SR", name: "Suriname" },
  { code: "TT", name: "Trinidad and Tobago" },
  { code: "UY", name: "Uruguay" },
  { code: "VE", name: "Venezuela" },
  { code: "AL", name: "Albania" },
  { code: "AD", name: "Andorra" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "CY", name: "Cyprus" },
  { code: "GR", name: "Greece" },
  { code: "IS", name: "Iceland" },
  { code: "XK", name: "Kosovo" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LU", name: "Luxembourg" },
  { code: "MC", name: "Monaco" },
  { code: "ME", name: "Montenegro" },
  { code: "MK", name: "North Macedonia" },
  { code: "MT", name: "Malta" },
  { code: "SM", name: "San Marino" },
  { code: "RS", name: "Serbia" },
  { code: "VA", name: "Vatican City" },
  { code: "DZ", name: "Algeria" },
  { code: "AO", name: "Angola" },
  { code: "BJ", name: "Benin" },
  { code: "BW", name: "Botswana" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "CM", name: "Cameroon" },
  { code: "CV", name: "Cape Verde" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "KM", name: "Comoros" },
  { code: "CG", name: "Congo" },
  { code: "CD", name: "Democratic Republic of the Congo" },
  { code: "DJ", name: "Djibouti" },
  { code: "EG", name: "Egypt" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "ER", name: "Eritrea" },
  { code: "ET", name: "Ethiopia" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambia" },
  { code: "GH", name: "Ghana" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "CI", name: "Ivory Coast" },
  { code: "KE", name: "Kenya" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libya" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "ML", name: "Mali" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "MA", name: "Morocco" },
  { code: "MZ", name: "Mozambique" },
  { code: "NA", name: "Namibia" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "RW", name: "Rwanda" },
  { code: "ST", name: "São Tomé and Príncipe" },
  { code: "SN", name: "Senegal" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SO", name: "Somalia" },
  { code: "SS", name: "South Sudan" },
  { code: "SD", name: "Sudan" },
  { code: "SZ", name: "Eswatini" },
  { code: "TZ", name: "Tanzania" },
  { code: "TG", name: "Togo" },
  { code: "TN", name: "Tunisia" },
  { code: "UG", name: "Uganda" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" }
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div id="header-sentinel" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', pointerEvents: 'none' }}></div>
      <AnimatedGradientBackground />
      <Header />
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto max-w-7xl px-6 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              Contact <span className="text-purple-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We'd love to hear from you! Fill out the form and our team will get back to you soon.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Form Card */}
            <div className="md:col-span-2 bg-purple-200 rounded-3xl shadow-2xl p-8 flex flex-col justify-center">
              <form className="w-full max-w-2xl mx-auto space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input id="name" type="text" placeholder="Your full name" className="bg-purple-100 border-gray-300 focus:border-purple-500 focus:ring-purple-500" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input id="email" type="email" placeholder="your@email.com" className="bg-purple-100 border-gray-300 focus:border-purple-500 focus:ring-purple-500" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="bg-purple-100 border-gray-300 focus:border-purple-500 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                    <Select>
                      <SelectTrigger className="bg-purple-100 border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.code}>{country.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <Input id="subject" type="text" placeholder="What is this regarding?" className="bg-purple-100 border-gray-300 focus:border-purple-500 focus:ring-purple-500" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea id="message" placeholder="Tell us about your business needs and how we can help..." className="min-h-[120px] bg-purple-100 border-gray-300 focus:border-purple-500 focus:ring-purple-500" required />
                </div>
                <div>
                  <Button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 w-full sm:w-auto" type="submit">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
            {/* Contact Info Card */}
            <div className="bg-purple-100 rounded-3xl shadow-xl p-8 flex flex-col items-center max-w-sm w-full mx-auto h-full justify-between py-12">
              <div className="flex flex-col items-center mb-6">
                <a href="mailto:tryzeniq@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group mb-2">
                  <Mail className="w-10 h-10 text-purple-500 mb-2 group-hover:text-purple-700 transition-colors" />
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Email</h2>
                  <span className="text-gray-700 text-center group-hover:text-purple-700 transition-colors">tryzeniq@gmail.com</span>
                </a>
              </div>
              <div className="flex flex-col items-center mb-6">
                <a href="tel:+916359185945" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group mb-2">
                  <Phone className="w-10 h-10 text-purple-500 mb-2 group-hover:text-purple-700 transition-colors" />
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Phone</h2>
                  <span className="text-gray-700 text-center group-hover:text-purple-700 transition-colors">+91 63591 85945</span>
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-10 h-10 text-purple-500 mb-2" />
                <h2 className="text-xl font-bold text-gray-900 mb-1">Address</h2>
                <p className="text-gray-700 text-center">317, Shivalik, Dabholi<br/> Surat, Gujarat 395004</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

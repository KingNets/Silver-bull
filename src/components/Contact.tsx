import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MapPin, Phone, Mail, Clock, Building, DollarSign, CheckCircle, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";
import { Alert, AlertDescription } from "./ui/alert";

interface FormData {
  title: string;
  firstName: string;
  lastName: string;
  companyName: string;
  registrationNumber: string;
  countryOfRegistration: string;
  email: string;
  phone: string;
  serviceType: string;
  estimatedQuantity: string;
  hearAbout: string;
  message: string;
  newsletter: boolean;
  terms: boolean;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    firstName: "",
    lastName: "",
    companyName: "",
    registrationNumber: "",
    countryOfRegistration: "",
    email: "",
    phone: "",
    serviceType: "",
    estimatedQuantity: "",
    hearAbout: "",
    message: "",
    newsletter: false,
    terms: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.serviceType) newErrors.serviceType = "Please select a service type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.terms) newErrors.terms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field
    if (errors[id as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSelectChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    if (!validateForm()) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields correctly.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = (import.meta as any).env.VITE_API_URL || "https://silv213-production.up.railway.app";
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your request has been submitted successfully!",
        });
        
        // Reset form
        setFormData({
          title: "",
          firstName: "",
          lastName: "",
          companyName: "",
          registrationNumber: "",
          countryOfRegistration: "",
          email: "",
          phone: "",
          serviceType: "",
          estimatedQuantity: "",
          hearAbout: "",
          message: "",
          newsletter: false,
          terms: false,
        });
        setErrors({});
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "An error occurred. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to submit form. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start trading? Contact our expert team for personalized quotes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Request a Quote</CardTitle>
              <CardDescription className="text-gray-400">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus.type && (
                  <Alert
                    className={
                      submitStatus.type === "success"
                        ? "bg-green-900 border-green-700"
                        : "bg-red-900 border-red-700"
                    }
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <AlertCircle className="h-4 w-4" />
                    )}
                    <AlertDescription>{submitStatus.message}</AlertDescription>
                  </Alert>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-white">
                      Title *
                    </Label>
                    <Select
                      value={formData.title}
                      onValueChange={(value) => handleSelectChange("title", value)}
                    >
                      <SelectTrigger
                        className={`bg-gray-700 border-gray-600 text-white ${
                          errors.title ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Select title" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="mr">Mr.</SelectItem>
                        <SelectItem value="mrs">Mrs.</SelectItem>
                        <SelectItem value="ms">Ms.</SelectItem>
                        <SelectItem value="dr">Dr.</SelectItem>
                        <SelectItem value="prof">Prof.</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.title && (
                      <p className="text-red-400 text-sm">{errors.title}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className={`bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 ${
                        errors.firstName ? "border-red-500" : ""
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-sm">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className={`bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 ${
                        errors.lastName ? "border-red-500" : ""
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-sm">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-white">
                      Company Name
                    </Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Company Name"
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber" className="text-white">
                      Registration Number
                    </Label>
                    <Input
                      id="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleInputChange}
                      placeholder="Registration Number"
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="countryOfRegistration" className="text-white">
                      Country of Registration
                    </Label>
                    <Input
                      id="countryOfRegistration"
                      value={formData.countryOfRegistration}
                      onChange={handleInputChange}
                      placeholder="Country"
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className={`bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm">{errors.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      className={`bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType" className="text-white">
                    Interested in *
                  </Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => handleSelectChange("serviceType", value)}
                  >
                    <SelectTrigger
                      className={`bg-gray-700 border-gray-600 text-white ${
                        errors.serviceType ? "border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="general">General Enquiry</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="transport">Metal Transport</SelectItem>
                      <SelectItem value="investment">Silver Investment</SelectItem>
                      <SelectItem value="storage">Storage</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.serviceType && (
                    <p className="text-red-400 text-sm">{errors.serviceType}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estimatedQuantity" className="text-white">
                    Approximate Investment
                  </Label>
                  <Select
                    value={formData.estimatedQuantity}
                    onValueChange={(value) => handleSelectChange("estimatedQuantity", value)}
                  >
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select investment range" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="100k-200k">100k-200k</SelectItem>
                      <SelectItem value="200k-300k">200k-300k</SelectItem>
                      <SelectItem value="300k-400k">300k-400k</SelectItem>
                      <SelectItem value="400k-500k">400k-500k</SelectItem>
                      <SelectItem value="500k+">500k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hearAbout" className="text-white">
                    Where did you hear about us?
                  </Label>
                  <Input
                    id="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleInputChange}
                    placeholder="e.g., Google, LinkedIn, Friend"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Your message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements..."
                    rows={6}
                    className={`bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm">{errors.message}</p>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-white"
                    />
                    <Label htmlFor="newsletter" className="text-gray-300">
                      Sign me up for newsletter
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-white bg-gray-700 border-gray-600 rounded focus:ring-white mt-1"
                    />
                    <div>
                      <Label htmlFor="terms" className="text-gray-300">
                        I agree with the{" "}
                        <a href="#privacy" className="text-white underline">
                          Terms Of Use
                        </a>{" "}
                        *
                      </Label>
                      {errors.terms && (
                        <p className="text-red-400 text-sm mt-1">{errors.terms}</p>
                      )}
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Tallinn, Estonia</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Phone Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-300">
                  <span className="text-white">Main:</span> +372 5049933
                </p>
                <p className="text-gray-300">
                  <span className="text-white">Business:</span> +372 53338733
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-300">
                  <span className="text-white">General:</span> Kaimo.rim@gmail.com
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-300">
                  <span className="text-white">Monday - Saturday:</span> 9:00 AM - 6:00 PM
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Company Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-300">
                  <span className="text-white">Company Name:</span> Rim Invest
                </p>
                <p className="text-gray-300">
                  <span className="text-white">Registration Number:</span> 10042991
                </p>
                <p className="text-gray-300">
                  <span className="text-white">Country of Registration:</span> Estonia
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Investment Minimums
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-300">
                  <span className="text-white">Starting Investment:</span> $100,000+
                </p>
                <p className="text-gray-300">
                  <span className="text-white">Note:</span> Tailored solutions for larger investments
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

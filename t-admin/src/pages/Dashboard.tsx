import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  LogOut, 
  Search, 
  Eye, 
  MessageSquare,
  RefreshCw,
  Trash2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const API_BASE_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:5000'
  : 'https://tryzeniqfinal-server.onrender.com';

interface ContactData {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
  status: 'pending' | 'read';
  createdAt: string;
  updatedAt: string;
}

interface DashboardProps {
  currentUser: { username: string; name: string };
  onLogout: () => void;
}

const Dashboard = ({ currentUser, onLogout }: DashboardProps) => {
  const [contacts, setContacts] = useState<ContactData[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<ContactData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedContact, setSelectedContact] = useState<ContactData | null>(null);
  const { toast } = useToast();

  // Fetch contact data from server
  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/contacts`);
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
        setFilteredContacts(data);
      } else {
        throw new Error('Failed to fetch contacts');
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
      toast({
        description: "Failed to fetch contact data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Update contact status
  const updateContactStatus = async (id: string, status: 'pending' | 'read') => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/contacts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        toast({
          description: "Marked as seen",
        });
        fetchContacts(); // Refresh data
        if (selectedContact && selectedContact._id === id) {
          setSelectedContact({ ...selectedContact, status });
        }
      } else {
        throw new Error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        description: "Failed to update contact status",
        variant: "destructive",
      });
    }
  };

  // Delete contact
  const deleteContact = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;

    try {
      const response = await fetch(`${API_BASE_URL}/api/contacts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast({
          description: "Contact deleted successfully",
        });
        fetchContacts(); // Refresh data
        setSelectedContact(null);
      } else {
        throw new Error('Failed to delete contact');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      toast({
        description: "Failed to delete contact",
        variant: "destructive",
      });
    }
  };

  // Filter contacts based on search and status
  useEffect(() => {
    let filtered = contacts;

    if (searchTerm) {
      filtered = filtered.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone.includes(searchTerm) ||
        contact.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(contact => contact.status === statusFilter);
    }

    setFilteredContacts(filtered);
  }, [contacts, searchTerm, statusFilter]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: "bg-yellow-500", text: "Pending" },
      read: { color: "bg-green-500", text: "Read" }
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={`${config.color} text-white`}>{config.text}</Badge>;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-sm text-gray-300">Welcome, {currentUser.name}</p>
              </div>
            </div>
            <Button
              onClick={onLogout}
              variant="destructive"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">Total Contacts</p>
                  <p className="text-2xl font-bold text-white">{contacts.length}</p>
                </div>
                <MessageSquare className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">Pending</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {contacts.filter(c => c.status === 'pending').length}
                  </p>
                </div>
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {contacts.filter(c => c.status === 'pending').length}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">Read</p>
                  <p className="text-2xl font-bold text-blue-400">
                    {contacts.filter(c => c.status === 'read').length}
                  </p>
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {contacts.filter(c => c.status === 'read').length}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="read">Read</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={fetchContacts}
                variant="default"
                className="bg-blue-600 hover:bg-blue-500 text-white"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contacts Table */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Contact Form Submissions</CardTitle>
            <CardDescription className="text-gray-300">
              Manage and respond to contact form submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <RefreshCw className="w-8 h-8 text-white animate-spin" />
                <span className="ml-2 text-white">Loading contacts...</span>
              </div>
            ) : filteredContacts.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-300">No contacts found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/20">
                      <TableHead className="text-white">Name</TableHead>
                      <TableHead className="text-white">Email</TableHead>
                      <TableHead className="text-white">Phone</TableHead>
                      <TableHead className="text-white">Subject</TableHead>
                      <TableHead className="text-white">Details</TableHead>
                      <TableHead className="text-white">Status</TableHead>
                      <TableHead className="text-white">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContacts.map((contact) => (
                      <TableRow key={contact._id} className="border-white/10 hover:bg-white/5">
                        <TableCell className="text-white font-medium">{contact.name}</TableCell>
                        <TableCell className="text-gray-300">{contact.email}</TableCell>
                        <TableCell className="text-gray-300">{contact.phone}</TableCell>
                        <TableCell className="text-gray-300">{contact.subject}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedContact(contact)}
                            className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white"
                          >
                            View Details
                          </Button>
                        </TableCell>
                        <TableCell>{getStatusBadge(contact.status)}</TableCell>
                        <TableCell className="text-gray-300">{formatDate(contact.createdAt)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {selectedContact && (
        <Dialog open={!!selectedContact} onOpenChange={(isOpen) => !isOpen && setSelectedContact(null)}>
          <DialogContent className="bg-gray-900 border-white/20">
            <DialogHeader>
              <DialogTitle className="text-white">Contact Details</DialogTitle>
              <DialogDescription className="text-gray-300">
                From: {selectedContact.name} ({selectedContact.email})
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div>
                <label className="text-sm font-medium text-gray-400">Subject</label>
                <p className="text-white mt-1">{selectedContact.subject}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-400">Message</label>
                <p className="text-white mt-1 p-3 bg-white/5 rounded-lg max-h-60 overflow-y-auto">
                  {selectedContact.message}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <label className="text-sm font-medium text-gray-400">Status</label>
                  <div className="mt-1">{getStatusBadge(selectedContact.status)}</div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-400">Received</label>
                  <p className="text-white mt-1">{formatDate(selectedContact.createdAt)}</p>
                </div>
              </div>
            </div>
            <DialogFooter>
              {selectedContact.status === 'pending' && (
                <Button
                  variant="default"
                  onClick={() => updateContactStatus(selectedContact._id, 'read')}
                  className="bg-blue-600 hover:bg-blue-500 text-white"
                >
                  <Eye className="w-4 h-4 mr-2" />
                   Mark as Read
                </Button>
              )}
              <Button
                variant="destructive"
                onClick={() => deleteContact(selectedContact._id)}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                 Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Dashboard; 